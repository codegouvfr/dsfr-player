

import { useReducer, useEffect, EffectCallback } from "react";
import type { ScreenProps } from "./Screen";
import { Screen } from "./Screen";
import { GlobalStyles } from "tss-react";


export type DsfrPlayerProps = {
	items: DsfrPlayerProps.Item[];
	specificIndex?: number;
	rootFontSize: number | string;
};

export namespace DsfrPlayerProps {

	export type Item = { effect?: EffectCallback; } & (
		| Item.Image
		| Item.MusicCredential
		| Item.BulletPoints
		| Item.Text
	);

	export namespace Item {

		export type Image = ScreenProps.Image & { duration: number; };
		export type MusicCredential = ScreenProps.MusicCredential & { duration: number; };
		export type BulletPoints = Omit<ScreenProps.BulletPoints, "bulletPoints" | "currentIndex"> & { bulletPoints: (ScreenProps.BulletPoints["bulletPoints"][number] & { duration: number; })[]; };
		export type Text = ScreenProps.Text & { duration: number; };

	}

}


export function DsfrPlayer(props: DsfrPlayerProps) {

	const { items, specificIndex, rootFontSize } = props;

	const [index, incrementIndex] = useReducer(index => index + 1, specificIndex ?? 0);

	const item = items[index];

	useEffect(
		() => {

			if (specificIndex !== undefined) {
				return;
			}

			const cleanup = item.effect?.();

			if (index === items.length - 1) {
				return cleanup;
			}


			setTimeout(
				incrementIndex,
				item.type === "bullet points" ?
					item.bulletPoints.map(({ duration }) => duration).reduce((curr, prev) => curr + prev, 0) :
					item.duration
			);

			return cleanup;

		},
		[index]
	);

	return (
		<>
			<GlobalStyles
				styles={{
					html: {
						fontSize: rootFontSize,
					},
					body: {
						margin: 0
					}
				}}
			/>
			{item.type === "bullet points" ? <BulletPointsDsfrPlayer key={index} {...item} /> : <Screen key={index} {...item} />}
		</>
	)


}

function BulletPointsDsfrPlayer(props: DsfrPlayerProps.Item.BulletPoints) {

	const { bulletPoints, ...rest } = props;

	const [index, incrementIndex] = useReducer(index => index + 1, 0);

	useEffect(
		() => {

			if (index === bulletPoints.length - 1) {
				return;
			}

			setTimeout(
				incrementIndex,
				bulletPoints[index].duration
			);
		},
		[index]
	);

	return (
			<Screen
				key={index}
				bulletPoints={bulletPoints}
				currentIndex={index}
				{...rest}
			/>
	);


}