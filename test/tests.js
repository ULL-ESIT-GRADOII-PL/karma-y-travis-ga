//var expect = chai.expect;
var expect = chai.expect;

describe("Medida", function () {
  describe("constructor", function() {
    it("Existe Constructor", function() {
      var medida = new Medida (32, 'f');
      expect(medida.valor).to.equal(32);
    });
    it("Puede recibir un solo parámetro", function() {
      var medida = new Medida ('32f');
      expect(medida.valor).to.equal(32);
      expect(medida.tipo).to.equal('f');
    });
  });


  describe("Match", function () {
    it("¿Caza bien?", function () {
      var valor = Medida.match('320e-1f to c');
      expect(parseFloat(valor.numero)).to.equal(320e-1);
      expect(valor.tipo).to.equal('f');
      expect(valor.destino).to.equal('c');
    });
  });
  describe("Convertir", function () {
    it("¿Convierte Correctamente'", function() {
      var conv = Medida.convertir('320e-1f to c');
      expect(conv).to.equal('0.0 C');
    });
  });
});

describe("Temperatura", function () {
  describe("constructor", function () {
    it("Existe un Constructor", function () {
      var temperatura = new Temperatura(32, 'c');
      expect(temperatura.valor).to.equal(32);
    });
    it("Puede recibir un solo parámetro", function () {
      var temperatura = new Temperatura('32c');
      expect(temperatura.valor).to.equal(32);
      expect(temperatura.tipo).to.equal('c');
    });
  });
});


describe("Celsius", function () {
  describe("constructor", function () {
    it("Existe un Constructor", function () {
      var cel = new Celsius(320e-1);
      expect(cel.valor).to.equal(320e-1);
    });
  });
  describe("Conversiones Celsius", function () {
    it("Conversión a Fahrenheit", function () {
      var cel = new Celsius(320e-1);
      expect(cel.toFarenheit().valor).to.equal(89.60);
    });
    it("Conversión a Kelvin", function () {
      var cel = new Celsius(320e-1);
      expect(cel.toKelvin().valor).to.equal(305.15);
    });
  });
});


describe("Fahrenheit", function () {
  describe("constructor", function () {
    it("Existe un Constructor", function () {
      var far = new Farenheit(320e-1);
      expect(far.valor).to.equal(320e-1);
    });
  });
  describe("Conversiones Farenheit", function () {
    it("Conversión a Celsius", function () {
      var far = new Farenheit(320e-1);
      expect(far.toCelsius().valor).to.equal(0);
    });
    it("Conversion a Kelvin", function () {
      var far = new Farenheit(320e-1);
      expect(far.toKelvin().valor).to.equal(273.15);
    });
  });
});


describe("Kelvin", function () {
  describe("constructor", function () {
    it("Existe un Constructor", function () {
      var kel = new Kelvin(1000e-1);
      expect(kel.valor).to.equal(1000e-1);
    });
  });
  describe("Conversiones Kelvin", function () {
    it("Conversion a Celsius", function () {
      var kel = new Kelvin(1000e-1);
      expect(parseFloat(kel.toCelsius().valor.toFixed(2))).to.equal(-173.15);
    });
    it("Conversion a Fahrenheit", function () {
      var kel = new Kelvin(1000e-1);
      expect(parseFloat(kel.toFarenheit().valor.toFixed(2))).to.equal(-279.67);
    });
  });
});