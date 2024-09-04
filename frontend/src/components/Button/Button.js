import classes from './button.module.css'

export default function Button({
    type,
    text,
    onCLick,
    color,
    backgroundColor,
    fontSize,
    width,
    height,
}) {
    return (
        <div className={classes.container}>
            <button
                style={{
                    color,
                    backgroundColor,
                    fontSize,
                    width,
                    height,
                }}
                type={type}
                onClick={onCLick}
            >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    type: 'button',
    text: 'Submit',
    backgroundColor: '#e72929',
    color: 'white',
    fontSize: '1.3rem',
    width: '12rem',
    height: '3.5rem'

}
