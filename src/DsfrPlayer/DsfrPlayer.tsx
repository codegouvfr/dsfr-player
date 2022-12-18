

import { useReducer, useEffect } from "react";
import type { ScreenProps } from "./Screen";
import { Screen } from "./Screen";


export type DsfrPlayerProps = {
	items: DsfrPlayerProps.Item[];
	specificIndex?: number;
};

export namespace DsfrPlayerProps {

	export type Item =
		| Item.Image
		| Item.MusicCredential
		| Item.BulletPoints
		| Item.Text;

	export namespace Item {

		export type Image = ScreenProps.Image & { duration: number; };
		export type MusicCredential = ScreenProps.MusicCredential & { duration: number; };
		export type BulletPoints = Omit<ScreenProps.BulletPoints, "bulletPoints" | "currentIndex"> & { bulletPoints: (ScreenProps.BulletPoints["bulletPoints"][number] & { duration: number; })[]; };
		export type Text = ScreenProps.Text & { duration: number; };

	}

}


export function DsfrPlayer(props: DsfrPlayerProps) {

	const { items, specificIndex } = props;

	const [index, incrementIndex] = useReducer(index => index + 1, specificIndex ?? 0);

	const item = items[index];

	useEffect(
		() => {

			if( specificIndex !== undefined ){
				return;
			}

			if( index === items.length - 1 ){
				return;
			}

			setTimeout(
				incrementIndex,
				item.type === "bullet points" ?
					item.bulletPoints.map(({ duration }) => duration).reduce((curr, prev) => curr + prev, 0) :
					item.duration
			);
		},
		[index]
	);

	return item.type === "bullet points" ? <BulletPointsDsfrPlayer {...item} /> : <Screen key={index} {...item} />


}

function BulletPointsDsfrPlayer(props: DsfrPlayerProps.Item.BulletPoints) {

	const { bulletPoints, ...rest } = props;

	const [index, incrementIndex] = useReducer(index => index + 1, 0);

	useEffect(
		() => {

			if( index === bulletPoints.length - 1 ){
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