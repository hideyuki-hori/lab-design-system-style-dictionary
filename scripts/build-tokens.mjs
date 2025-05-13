import fs from 'fs'
import { randomBytes } from 'crypto'
import StyleDictionary from 'style-dictionary'
import { register } from '@tokens-studio/sd-transforms'

register(StyleDictionary)

const tokens = JSON.parse(
  fs.readFileSync('./tokens/tokens.json', 'utf-8')
)

const body = Object.entries(tokens)
  .filter(([key]) => !key.startsWith('$'))
  .reduce((acc, [, value]) => ({ ...acc, ...value }), {})

const temporary = `./tokens/temp-${randomBytes(8).toString('hex')}.json`

fs.writeFileSync(temporary, JSON.stringify(body, null, 2))

const sd = new StyleDictionary({
  source: [temporary],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
})

await sd.buildAllPlatforms()

fs.unlinkSync(temporary)