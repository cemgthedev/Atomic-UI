export const sliderExample = `<Slider defaultValue={[50]} max={100} step={1} />`;

export const sliderVariantsExample = `<div className="w-full max-w-2xl flex flex-col gap-6">
  {(
    [
      "default",
      "dark",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const
  ).map((variant) => (
    <div key={variant} className="flex flex-col gap-2">
      <Label className="capitalize">{variant}</Label>
      <Slider variant={variant} defaultValue={[60]} />
    </div>
  ))}
</div>`;

export const sliderRangeExample = `<Slider defaultValue={[25, 75]} max={100} step={1} />`;

export const sliderOrientationExample = `<div className="flex h-48 justify-center">
  <Slider
    defaultValue={[40]}
    max={100}
    step={1}
    orientation="vertical"
  />
</div>`;

export const sliderStatesExample = `<div className="flex w-full max-w-md flex-col gap-6">
  <Slider defaultValue={[70]} max={100} step={1} />
  <Slider defaultValue={[40]} disabled max={100} step={1} />
</div>`;

export const sliderPropertiesExample = `<Slider
  defaultValue={[20, 80]}
  min={0}
  max={100}
  step={5}
  minStepsBetweenThumbs={2}
/>`;
