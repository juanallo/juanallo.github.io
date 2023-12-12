declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"7-days-of-js-by-chapgpt.md": {
	id: "7-days-of-js-by-chapgpt.md";
  slug: "7-days-of-js-by-chapgpt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-themes-templates-power-next-build.md": {
	id: "astro-themes-templates-power-next-build.md";
  slug: "astro-themes-templates-power-next-build";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"back-in-the-game.md": {
	id: "back-in-the-game.md";
  slug: "back-in-the-game";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"callbacks-in-javascript.md": {
	id: "callbacks-in-javascript.md";
  slug: "callbacks-in-javascript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"common-css-layouts-in-tailwind.md": {
	id: "common-css-layouts-in-tailwind.md";
  slug: "common-css-layouts-in-tailwind";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"create-quick-and-stunning-graphs.md": {
	id: "create-quick-and-stunning-graphs.md";
  slug: "create-quick-and-stunning-graphs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"creating-gifs-from-the-osx-terminal-in-2-easy-steps.md": {
	id: "creating-gifs-from-the-osx-terminal-in-2-easy-steps.md";
  slug: "creating-gifs-from-the-osx-terminal-in-2-easy-steps";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css-flexbox-guide.md": {
	id: "css-flexbox-guide.md";
  slug: "css-flexbox-guide";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"customer-journey-framework.md": {
	id: "customer-journey-framework.md";
  slug: "customer-journey-framework";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"debugging-ie11-with-virtualbox.md": {
	id: "debugging-ie11-with-virtualbox.md";
  slug: "debugging-ie11-with-virtualbox";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dependency-graph-for-javascript-projects.md": {
	id: "dependency-graph-for-javascript-projects.md";
  slug: "dependency-graph-for-javascript-projects";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"design-is-a-process.md": {
	id: "design-is-a-process.md";
  slug: "design-is-a-process";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"design-project-organized.md": {
	id: "design-project-organized.md";
  slug: "design-project-organized";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"free-ux-design-books.md": {
	id: "free-ux-design-books.md";
  slug: "free-ux-design-books";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"how-to-measure-design-effectiveness.md": {
	id: "how-to-measure-design-effectiveness.md";
  slug: "how-to-measure-design-effectiveness";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"javascript-as-promised.md": {
	id: "javascript-as-promised.md";
  slug: "javascript-as-promised";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"lazy-loading-images-with-intersection-observer.md": {
	id: "lazy-loading-images-with-intersection-observer.md";
  slug: "lazy-loading-images-with-intersection-observer";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"learning-path-getting-started-with-react.md": {
	id: "learning-path-getting-started-with-react.md";
  slug: "learning-path-getting-started-with-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"microinteractions.md": {
	id: "microinteractions.md";
  slug: "microinteractions";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"multiple-options-to-deploy-your-web-application.md": {
	id: "multiple-options-to-deploy-your-web-application.md";
  slug: "multiple-options-to-deploy-your-web-application";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"near-fittss-law.md": {
	id: "near-fittss-law.md";
  slug: "near-fittss-law";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"partial-application-made-easy-with-es6.md": {
	id: "partial-application-made-easy-with-es6.md";
  slug: "partial-application-made-easy-with-es6";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programmers-coders.md": {
	id: "programmers-coders.md";
  slug: "programmers-coders";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"react-summit-remote-edition-highlights.md": {
	id: "react-summit-remote-edition-highlights.md";
  slug: "react-summit-remote-edition-highlights";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"robert-fabricant-quote.md": {
	id: "robert-fabricant-quote.md";
  slug: "robert-fabricant-quote";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"starting-a-new-trip.md": {
	id: "starting-a-new-trip.md";
  slug: "starting-a-new-trip";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"teach-object-oriented-programming-the-steve-jobs-way.md": {
	id: "teach-object-oriented-programming-the-steve-jobs-way.md";
  slug: "teach-object-oriented-programming-the-steve-jobs-way";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"teaching-llms-to-play-the-drums.md": {
	id: "teaching-llms-to-play-the-drums.md";
  slug: "teaching-llms-to-play-the-drums";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"testing-vscode-extensions-with-cypress-and-codeserver.md": {
	id: "testing-vscode-extensions-with-cypress-and-codeserver.md";
  slug: "testing-vscode-extensions-with-cypress-and-codeserver";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"thoughts-on-snapshot-testing.md": {
	id: "thoughts-on-snapshot-testing.md";
  slug: "thoughts-on-snapshot-testing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tip-list-npm-scripts.md": {
	id: "tip-list-npm-scripts.md";
  slug: "tip-list-npm-scripts";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tip-run-a-simple-server-with-python.md": {
	id: "tip-run-a-simple-server-with-python.md";
  slug: "tip-run-a-simple-server-with-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tip-syntax-highlighting-with-bat.md": {
	id: "tip-syntax-highlighting-with-bat.md";
  slug: "tip-syntax-highlighting-with-bat";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tip-use-z.md": {
	id: "tip-use-z.md";
  slug: "tip-use-z";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tip-watch-out-for-null-in-default-params.md": {
	id: "tip-watch-out-for-null-in-default-params.md";
  slug: "tip-watch-out-for-null-in-default-params";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"unlocking-powerful-design-3-affordable-alternatives-to-big-names.md": {
	id: "unlocking-powerful-design-3-affordable-alternatives-to-big-names.md";
  slug: "unlocking-powerful-design-3-affordable-alternatives-to-big-names";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ux-magazine.md": {
	id: "ux-magazine.md";
  slug: "ux-magazine";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"visual-alphabet.md": {
	id: "visual-alphabet.md";
  slug: "visual-alphabet";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"visual-studio-code-extensions-adding-code-coverage-in-3-easy-steps.md": {
	id: "visual-studio-code-extensions-adding-code-coverage-in-3-easy-steps.md";
  slug: "visual-studio-code-extensions-adding-code-coverage-in-3-easy-steps";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-1.md": {
	id: "weekly-digest-1.md";
  slug: "weekly-digest-1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-10-on-remix-snowpack-rome-and-webvitals.md": {
	id: "weekly-digest-10-on-remix-snowpack-rome-and-webvitals.md";
  slug: "weekly-digest-10-on-remix-snowpack-rome-and-webvitals";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-11-on-technical-interviews.md": {
	id: "weekly-digest-11-on-technical-interviews.md";
  slug: "weekly-digest-11-on-technical-interviews";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-12-on-frontend-interviews.md": {
	id: "weekly-digest-12-on-frontend-interviews.md";
  slug: "weekly-digest-12-on-frontend-interviews";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-2-latest-web-open-source-releases.md": {
	id: "weekly-digest-2-latest-web-open-source-releases.md";
  slug: "weekly-digest-2-latest-web-open-source-releases";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-3-understanding-javascript-internals.md": {
	id: "weekly-digest-3-understanding-javascript-internals.md";
  slug: "weekly-digest-3-understanding-javascript-internals";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-4-on-react-internals.md": {
	id: "weekly-digest-4-on-react-internals.md";
  slug: "weekly-digest-4-on-react-internals";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-5-100-days-of-code.md": {
	id: "weekly-digest-5-100-days-of-code.md";
  slug: "weekly-digest-5-100-days-of-code";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-6-learning-git-from-novice-to-expert.md": {
	id: "weekly-digest-6-learning-git-from-novice-to-expert.md";
  slug: "weekly-digest-6-learning-git-from-novice-to-expert";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-7-on-javascript-books.md": {
	id: "weekly-digest-7-on-javascript-books.md";
  slug: "weekly-digest-7-on-javascript-books";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-8-on-building-games.md": {
	id: "weekly-digest-8-on-building-games.md";
  slug: "weekly-digest-8-on-building-games";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"weekly-digest-9-everything-you-need-to-know-about-deno.md": {
	id: "weekly-digest-9-everything-you-need-to-know-about-deno.md";
  slug: "weekly-digest-9-everything-you-need-to-know-about-deno";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"whats-all-the-hype-about-react-server-components.md": {
	id: "whats-all-the-hype-about-react-server-components.md";
  slug: "whats-all-the-hype-about-react-server-components";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"images": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
