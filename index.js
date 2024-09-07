//OOP - ARCHITECTURE
try {
  class Vehciles {
    constructor(speed, year, engine, wheel) {
      this.speed = speed;
      this.year = year;
      this.engine = engine;
      this.wheel = wheel;
    }

    increaseSpeed() {
      this.speed = this.speed + 5;
    }
  }

  class Car extends Vehciles {
    constructor(color, fuel, speed, year, engine, wheel) {
      super(speed, year, engine, wheel);
      this.color = color;
      this.fuel = fuel;
    }
  }

  class Plane extends Vehciles {
    constructor(length, weight, speed, year, engine, wheel) {
      super(speed, year, engine, wheel);
      this.length = length;
      this.weight = weight;
    }
  }
  class Bus extends Vehciles {
    constructor(length, speed, year, engine, wheel) {
      super(speed, year, engine, wheel);
      this.length = length;
    }
  }

  class Velo extends Vehciles {
    constructor(weight, speed, year, wheel) {
      super(speed, year, wheel);
      this.weight = weight;
    }
  }

  class Moto extends Vehciles {
    constructor(info, year, engine, wheel) {
      super(speed, year, engine, wheel);
      this.info = info;
    }
  }

  const luftansa = new Plane(1200, 10, 900, 2010, true, 3);
  const bmw = new Car("red", "dizel", 200, 2022, true, 4);
  const bakuBus = new Bus(20, 200, 2022, true, 4);
  const desna = new Velo(10, 20, 200, 2022, true, 4);
  const honda = new Velo(
    "This motor has been released 2015",
    20,
    200,
    2022,
    true,
    4
  );

  console.log(luftansa);
  console.log(bmw);
  console.log(bakuBus);
  console.log(desna);
  console.log(honda);
} catch (err) {
  console.err(err);
}
