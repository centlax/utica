export type GetObjectField<MaybeObject, Key extends string> =
	MaybeObject extends Record<string, unknown> ? MaybeObject[Key] : never;
