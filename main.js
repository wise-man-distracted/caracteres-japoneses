import { observable, html } from "sinuous"

const romaji = observable('')
const hiragana = observable('')
const katakana = observable('')

function fromRomaji(e) {
	hiragana(wanakana.toHiragana(e.target.value))
	katakana(wanakana.toKatakana(e.target.value))
}

function fromHiragana(e) {
	romaji(wanakana.toRomaji(e.target.value))
	katakana(wanakana.toKatakana(e.target.value))
}

function fromKatakana(e) {
	romaji(wanakana.toRomaji(e.target.value))
	hiragana(wanakana.toHiragana(e.target.value))
}

const Textarea = ({oninput, value, title}) => {
	return html`
		<label class="w-full">
			<h2 class="text-2xl mb-4">${title}</h2>
			<textarea
				oninput=${oninput}
				value=${value}
				autocapitalize="none"
				autocorrect="off"
				autocomplete="off"
				spellcheck="false"
				class="w-full resize-none border p-4 rounded h-full"
			>
			</textarea>
		</label>
	`
}

const Romaji = () => {
	return html`
		<${Textarea} oninput=${fromRomaji} value=${romaji} title="Romaji" />
	`
}

const Hiragana = () => {
	return html `
		<${Textarea} oninput=${fromHiragana} value=${hiragana} title="Hiragana" />
	`
}

const Katakana = () => {
	return html `
		<${Textarea} oninput=${fromKatakana} value=${katakana} title="Katakana" />
	`
}

const App = () => {
	return html`
		<div class="w-full md:h-full p-8 bg-gray-50 space-y-16">
			<h1 class="text-4xl">Romaji to Hiragana to Katakana and vice versa</h1>
			<div class="md:columns-3 space-y-8 gap-8">
				<div class="w-full"><${Romaji} /></div>
				<div class="w-full"><${Hiragana} /></div>
				<div class="w-full"><${Katakana} /></div>
			</div>
		</div>
	`
}

document.body.append(App())