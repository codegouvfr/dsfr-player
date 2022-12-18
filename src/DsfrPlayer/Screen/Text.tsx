import type { ReactNode } from "react";
import { useStyles } from "tss-react/dsfr";

export type TextProps = {
	text: ReactNode;
	animation?: string;
};

export function Text(props: TextProps) {

	const { text, animation } = props;

	const { cx, css } = useStyles();

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center"
			}}
		>
			<h2
				className={cx(
					animation !== undefined && "animate__animated",
					animation,
					css({
						fontSize: "3.5rem",
						margin: 0,
						lineHeight: "4rem"
					})
				)}
			>
				{text}
			</h2>
		</div>
	);


}