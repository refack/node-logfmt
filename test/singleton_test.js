var logfmt = require('../logfmt'),
    assert = require('assert');

suite('logfmt singleton', function() {
  test('stream is configured', function(){
    assert(process.stdout === logfmt.stream, 'default stream is not stdout');
  })

  test('parses', function(){
    var data = logfmt.parse('foo=bar');
    assert.equal('bar', data.foo);
  })

  test('serializes', function(){
    var data = logfmt.serialize({foo: 'bar'});
    assert.equal('foo=bar', data);
  })

  test('maxErrorLines is configured', function(){
    assert.equal(10, logfmt.maxErrorLines);
  })
})
