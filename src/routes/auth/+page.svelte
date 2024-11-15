<script lang="ts">
	import { UButton, UField, UForm, UInput, ULabel } from '$lib/index.js';
	/** transition */
</script>

<section class="flex h-screen w-screen flex-col overflow-hidden bg-white px-8 text-gray-900">
	<UForm>
		<UField>
			<ULabel text="Username" />
			<UInput />
		</UField>
		<UField>
			<ULabel text="Password" hint="Forgot password?" />
			<UInput />
		</UField>
		<UButton label="Sign up" type="submit" />
	</UForm>
</section>
