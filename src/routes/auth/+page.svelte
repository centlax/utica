<script lang="ts">
import { UForm, UField, ULabel, UInput } from '$lib/index.js';
	export let data;
	const { form } = data;
</script>

<!-- Form with dataType 'form' -->
<UForm data={form} invalidate-all={false}>
	<UField name="name">
		<ULabel>Name</ULabel>
		<UInput/>
	</UField>
	<UField name="email">
		<ULabel>Email</ULabel>
		<UInput/>
	</UField>
	<p><button>Submit</button></p>
</UForm>
