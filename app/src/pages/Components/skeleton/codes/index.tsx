export const skeletonExample = `<div className="w-full max-w-xl flex flex-col gap-3">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-2/3" />
</div>`;

export const skeletonVariantsExample = `<div className='w-full max-w-xl flex flex-col gap-3'>
  {(["primary", "secondary", "success", "warning", "danger"] as const).map((variant) => (
    <Skeleton variant={variant} className='h-4 w-full' />
  ))}
</div>`;

export const skeletonSizesExample = `<div className='w-full max-w-xl flex flex-col gap-3'>
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Skeleton
      key={size}
      variant='primary'
      size={size}
      className='min-h-10 w-full'
    />
  ))}
</div>`;

export const skeletonRoundedExample = `<div className='w-full max-w-xl flex flex-col gap-3'>
  {(["xs", "sm", "md", "lg", "xl", "full"] as const).map((rounded) => (
    <Skeleton variant='primary' rounded={rounded} className='h-4 w-full' />
  ))}
</div>`;

export const skeletonPropertiesExample = `<Skeleton variant='default' rounded='md' className='h-4 w-full' />`;
