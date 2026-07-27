// Bundles all runtime dependencies (@langchain/openai, @n8n/ai-utilities)
// into the compiled output so the published package has zero runtime
// dependencies — a requirement for n8n verified community nodes.
// n8n-workflow stays external: the host n8n instance provides it.
const esbuild = require('esbuild');

const shared = {
	bundle: true,
	platform: 'node',
	target: 'node20',
	format: 'cjs',
	external: ['n8n-workflow'],
	minify: false,
	sourcemap: false,
};

async function build() {
	await esbuild.build({
		...shared,
		entryPoints: ['nodes/LmChatOpper/LmChatOpper.node.ts'],
		outfile: 'dist/nodes/LmChatOpper/LmChatOpper.node.js',
	});
	await esbuild.build({
		...shared,
		entryPoints: ['credentials/OpperApi.credentials.ts'],
		outfile: 'dist/credentials/OpperApi.credentials.js',
	});
}

build().catch((error) => {
	console.error(error);
	process.exit(1);
});
