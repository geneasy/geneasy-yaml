import yaml from 'js-yaml';

export default function parse(data) {
  if (!data) {
    return {};
  }

  const result = yaml.load(data);
  if (typeof result !== 'object') {
    throw new TypeError('Invalid data format, requires YAML format.');
  }

  return result;
}

export function register(geneasy) {
  geneasy.register({
    parsingEngine: { type: 'yaml', engine: parse }
  });
  geneasy.register({
    parsingEngine: { type: 'yml', engine: parse }
  });
}
