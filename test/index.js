import { expect } from 'chai';
import parse, { register } from '../lib/index.js';

describe('geneasy-yaml', () => {
  it('`parse` should to be a function', () => {
    expect(parse).to.be.a('function');
  });

  it('should `parse` return empty object when data not provided', () => {
    const result = parse();
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.an('object').that.is.empty;
  });

  it('should `parse` return parsed object when a yaml data provided', () => {
    const result = parse(`
---
YAML: YAML Ain't Markup Language™

What It Is:
  YAML is a human friendly data serialization
  language for all programming languages.
      `);
    expect(result).to.be.an('object');
    expect(result).have.own.property('YAML');
    expect(result).have.own.property('What It Is');
  });

  it('should `parse` return parsed object when a json data provided', () => {
    const result = parse(`{"foo": "bar"}`);
    expect(result).to.be.an('object');
    expect(result).have.own.property('foo');
  });

  it('should `parse` throw an error when data with invalid format', () => {
    try {
      parse('123');
      expect.fail('was not supposed to succeed');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });

  it('`register` should to be a function', () => {
    expect(register).to.be.a('function');
  });
});
