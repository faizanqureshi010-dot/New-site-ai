import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, glass, ...props }: HTMLAttributes<HTMLDivElement> & { glass?: boolean }) {
  return (
    <div
      data-cursor="card"
      className={cn(
        glass
          ? 'glass glass-hover rounded-token transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-premium'
          : 'rounded-token border border-line bg-panel transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-premium',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-b border-line px-6 py-4', className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-t border-line px-6 py-4', className)} {...props} />;
}
