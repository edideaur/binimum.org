
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/api" | "/api/posts.json" | "/blog" | "/blog/[slug]" | "/principles";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/about": Record<string, never>;
			"/api": Record<string, never>;
			"/api/posts.json": Record<string, never>;
			"/blog": { slug?: string };
			"/blog/[slug]": { slug: string };
			"/principles": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/api" | "/api/" | "/api/posts.json" | "/api/posts.json/" | "/blog" | "/blog/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/principles" | "/principles/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/blog/covers/hamsalami.jpg" | "/blog/covers/iraq.jpg" | "/blog/covers/random.jpg" | "/favicon.png" | "/fonts/IBMPlexSans-Bold.ttf" | "/fonts/IBMPlexSans-BoldItalic.ttf" | "/fonts/IBMPlexSans-Italic.ttf" | "/fonts/IBMPlexSans-Regular.ttf" | "/icons/apple-touch-icon.png" | "/icons/binimum.svg" | "/icons/favicon-96x96.png" | "/icons/favicon.ico" | "/icons/favicon.svg" | "/icons/site.webmanifest" | "/icons/web-app-manifest-192x192.png" | "/icons/web-app-manifest-512x512.png" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}