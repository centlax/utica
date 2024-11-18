import { z } from 'zod';

export const themes = ['light', 'dark'] as const;
export const languages = ['en', 'es', 'fr'] as const;
export const allergies = ['peanuts', 'dairy', 'gluten', 'soy', 'shellfish'] as const;

export const schema = z.object({
	email: z.string().email('Invalid email address. Please provide a valid email.'), // Improved message
	bio: z
		.string()
		.max(500, 'Bio must be 500 characters or fewer.') // Added validation for length
		.optional(),
	theme: z
		.enum(themes, {
			errorMap: () => ({
				message: `Theme must be one of the following: ${themes.join(', ')}.`
			})
		})
		.default('light'),
	language: z
		.enum(languages, {
			errorMap: () => ({
				message: `Language must be one of the following: ${languages.join(', ')}.`
			})
		})
		.default('en'),
	marketingEmails: z
		.boolean()
		.default(true)
		.refine((val) => typeof val === 'boolean', {
			message: 'Marketing emails preference must be a true or false value.'
		}),
	allergies: z
		.array(
			z.enum(allergies, {
				errorMap: () => ({
					message: `Each allergy must be one of the following: ${allergies.join(', ')}.`
				})
			})
		)
		.optional()
		.default([]) // Default to no allergies if not specified
});
