declare namespace Intl {
	class RelativeTimeFormat {
		constructor(locale: string, options: any);

		format(value: number, unit: string): string;
	}
}