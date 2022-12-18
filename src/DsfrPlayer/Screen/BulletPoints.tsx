import type { ReactNode } from "react";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

export type BulletPointsProps = {
	bulletPoints: {
		text: ReactNode;
		animation?: string;
	}[];
	currentIndex: number;
	spacing?: string | number;
};

export function BulletPoints(props: BulletPointsProps) {

	const { bulletPoints, currentIndex, spacing } = props;

	const { cx, css } = useStyles();

	return (
		<div
			className={css({
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			})}
		>
			<div style={{ textAlign: "center" }} >

				{bulletPoints.map(({ text, animation}, i) =>
					<h2
						className={
							cx(
								"animate__animated",
								i===currentIndex &&  animation,
								css({
									fontSize: "3.5rem",
									margin: 0,
									lineHeight: "4rem",
									marginBottom: bulletPoints.length - 1 === i ? undefined : (spacing ?? fr.spacing("32v")),
									visibility: i <= currentIndex ? undefined : "hidden"

								})
							)
						}
						key={i}
					>
						{text}
					</h2>
				)}
			</div>
		</div>
	);

}