import { type ComponentPropsWithoutRef, type ReactNode, type ElementType } from "react"

type ContainerProps<T extends ElementType> = {
    // receive the identifier of the component that should be returned by container component
as?: T;
children: ReactNode;
} & ComponentPropsWithoutRef<T>

export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
    // receive the component that should be returned as props
    const Component = as || 'div'
    return <Component {...props}>{children}</Component>
}