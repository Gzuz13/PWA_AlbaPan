export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-white-700 dark:text-white-300 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
