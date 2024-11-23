<script lang="ts">
	/** Imports */
	let { row, head } = $props();
</script>

<table>
	<caption>Table Title</caption>

	<colgroup>
		<col />
		<col />
		<col />
	</colgroup>

	<thead>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td>Row 1, Col 1</td>
			<td>Row 1, Col 2</td>
			<td>Row 1, Col 3</td>
		</tr>
		<tr>
			<td>Row 2, Col 1</td>
			<td>Row 2, Col 2</td>
			<td>Row 2, Col 3</td>
		</tr>
	</tbody>

	<tfoot>
		<tr>
			<td colspan="3">Footer Information</td>
		</tr>
	</tfoot>
</table>
