import type { ImageProps } from "./Image";
import { Image } from "./Image";
import type { MusicCredentialsProps } from "./MusicCredentials";
import { MusicCredentials } from "./MusicCredentials";
import type { BulletPointsProps } from "./BulletPoints";
import { BulletPoints } from "./BulletPoints";
import type { TextProps } from "./Text";
import { Text } from "./Text";

export type ScreenProps =
	| ScreenProps.Image
	| ScreenProps.MusicCredential
	| ScreenProps.BulletPoints
	| ScreenProps.Text;

export namespace ScreenProps {

	export type Image = { type: "image"; } & ImageProps;
	export type MusicCredential = { type: "music credentials"; } & MusicCredentialsProps;
	export type BulletPoints= { type: "bullet points"; } & BulletPointsProps;
	export type Text = { type: "text"; } & TextProps;

}

export function Screen(props: ScreenProps) {
	switch (props.type) {
		case "image": return <Image {...props} />;
		case "music credentials": return <MusicCredentials {...props} />;
		case "bullet points": return <BulletPoints {...props} />;
		case "text": return <Text {...props} />;
	}
}