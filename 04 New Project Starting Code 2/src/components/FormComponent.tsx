import { ComponentPropsWithoutRef, FormEvent, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown ) => void;
};

export default function Form({onSave, children, ...otherProps}: FormProps) {
    const form = useRef<HTMLFormElement>(null);
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData) // converts formData to simpler object where we can access data with data.name
        onSave(data);
        form.current?.reset();
    }
    return <form onSubmit={handleSubmit} {...otherProps}>
        {children}
    </form>
}