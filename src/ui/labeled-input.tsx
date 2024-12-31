import {h} from "preact"

interface Props {
    label: string;
    // FUTURE: add more possibilities for `type` as needed
    type: "text" | "password";
    value?: string;
    onInput?: (newValue: string) => unknown;
}

export function LabeledInput(props: Props) {
    return (
        <label style={styles.label}>
            {props.label}
            {" "}
            <input
                style={styles.input}
                type={props.type}
                value={props.value}
                onInput={(e) => props.onInput?.(e.currentTarget.value)}
            />
        </label>
    )
}

const styles = {
    label: {
        display: "block",
        paddingBlock: 6,
    },

    input: {
        display: "block",
        padding: 3,
        width: "20em",
    },
}
