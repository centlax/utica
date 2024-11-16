import type { Actions } from './$types.js';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { registerSchema, profileSchema } from './schema.js';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const form = await superValidate(zod(registerSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(registerSchema));

		//console.log('register', form);

		if (!form.valid) return fail(400, { form });

		return message(form, { text: 'Form "register" posted successfully!' });
	}
} satisfies Actions;
