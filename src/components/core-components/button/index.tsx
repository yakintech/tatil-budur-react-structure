import { Button as MaterialButtonComponent } from "@mui/material";

interface ButtonProps extends React.ComponentProps<typeof MaterialButtonComponent> {
    bgColor?: string
}

const Button = (props: ButtonProps) => {

    return (
        <MaterialButtonComponent
            style={{ backgroundColor: props.bgColor }}
            variant='contained'
            {...props}

        >
            {props.children}
        </MaterialButtonComponent>
    )
}


export default Button


