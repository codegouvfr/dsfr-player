
import type { ReactNode } from "react";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

export type MusicCredentialsProps = {
	title: ReactNode;
	band: ReactNode;
};

export function MusicCredentials(props: MusicCredentialsProps) {

	const { band, title } = props;

	const { css, cx, theme } = useStyles();

	return (
		<div
			style={{
				height: "100vh",
				position: "relative"
			}}
		>
			<div
				className={css({
					position: "absolute",
					left: "3rem",
					bottom: "3rem",
					color: theme.decisions.text.mention.grey.default
				})}
			>
				<p
					className={
						cx(
						css({
							margin: 0,
							textTransform: "uppercase",
							fontSize: "3.5rem",
							lineHeight: "4rem",
						})
						)
					}
				>
					{title}
				</p>
				<p
					className={
						css({
							margin: 0,
							...fr.spacing("margin", {
								top: "5v"
							}),
							textTransform: "uppercase",
							fontSize: "3.5rem",
							lineHeight: "4rem",
						})
					}
				>
					{band}
				</p>
			</div>
		</div>
	);
}