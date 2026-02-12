"use client";
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

/* ---------------------------------- */
/* Types                               */
/* ---------------------------------- */

type RechartsPayloadItem = {
  name?: string;
  dataKey?: string | number;
  value?: number | string;
  color?: string;
  payload?: Record<string, unknown>;
};

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

/* ---------------------------------- */
/* Chart Container                     */
/* ---------------------------------- */

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

/* ---------------------------------- */
/* Chart Style                         */
/* ---------------------------------- */

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, cfg]) => cfg.color || cfg.theme
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart="${id}"] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}`
          )
          .join("\n"),
      }}
    />
  );
};

/* ---------------------------------- */
/* Tooltip                             */
/* ---------------------------------- */

const ChartTooltip = RechartsPrimitive.Tooltip;

type ChartTooltipContentProps = {
  active?: boolean;
  payload?: RechartsPayloadItem[];
  label?: string | number;
  className?: string;
  labelFormatter?: (
    label: React.ReactNode,
    payload: RechartsPayloadItem[]
  ) => React.ReactNode;
  formatter?: (
    value: number | string,
    name: string,
    item: RechartsPayloadItem,
    index: number
  ) => React.ReactNode;
  color?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
};

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>((props, ref) => {
  const {
    active,
    payload = [],
    label,
    className,
    labelFormatter,
    formatter,
    color,
    hideLabel = false,
    hideIndicator = false,
    indicator = "dot",
    nameKey,
    labelKey,
  } = props;

  const { config } = useChart();

  if (!active || payload.length === 0) return null;

  const tooltipLabel =
    !hideLabel && payload.length
      ? (() => {
          const item = payload[0];
          const key = String(labelKey || item.dataKey || item.name || "value");
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          const value =
            typeof label === "string"
              ? config[label]?.label ?? label
              : itemConfig?.label;

          if (!value) return null;

          return (
            <div className="font-medium">
              {labelFormatter ? labelFormatter(value, payload) : value}
            </div>
          );
        })()
      : null;

  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-32 gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = String(nameKey || item.name || item.dataKey || "value");
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.color;

          return (
            <div key={index} className="flex items-center gap-2">
              {!hideIndicator && (
                <div
                  className={cn("rounded-sm", {
                    "h-2.5 w-2.5": indicator === "dot",
                    "w-1 h-3": indicator === "line",
                    "w-3 border border-dashed": indicator === "dashed",
                  })}
                  style={{
                    backgroundColor: indicatorColor,
                    borderColor: indicatorColor,
                  }}
                />
              )}

              <div className="flex flex-1 justify-between">
                <span className="text-muted-foreground">
                  {itemConfig?.label || item.name}
                </span>
                {item.value != null && (
                  <span className="font-mono tabular-nums">
                    {Number(item.value).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltip";

/* ---------------------------------- */
/* Legend                              */
/* ---------------------------------- */

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  {
    payload?: { value?: string; dataKey?: string; color?: string }[];
    verticalAlign?: "top" | "bottom";
    hideIcon?: boolean;
    nameKey?: string;
    className?: string;
  }
>(({ payload, verticalAlign = "bottom", hideIcon = false, nameKey, className }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, index) => {
        const key = String(nameKey || item.dataKey || "value");
        const itemConfig = config[key];

        return (
          <div key={index} className="flex items-center gap-1.5">
            {!hideIcon && (
              <div
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

/* ---------------------------------- */
/* Helper                              */
/* ---------------------------------- */

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: RechartsPayloadItem,
  key: string
) {
  const data =
    payload.payload && typeof payload.payload === "object"
      ? payload.payload
      : {};

  const resolvedKey =
    typeof (data as any)[key] === "string" ? (data as any)[key] : key;

  return config[resolvedKey] ?? config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
