import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>;

// will render a link
type AnchorProps = {
    el: 'link'
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps ) {
    //const {el, ...otherProps} = props;

    if (props.el === 'link') {
        return <a className="button" {...props}></a>
    }

    return <button className="button" type="button" {...props}></button>
}