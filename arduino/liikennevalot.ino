// for arduino

// käynnistys- ja sulkemispainike
const int buttonTogglePin = 2;

// ledit
const int led_red = 5;
const int led_yellow = 9;
const int led_green = 13;

int buttonState = 0;
int lightsOn = false;

void setup() {
    pinMode(led_red, OUTPUT);
    pinMode(led_yellow, OUTPUT);
    pinMode(led_green, OUTPUT);

    pinMode(buttonTogglePin, INPUT);
}

void loop() {
    buttonState = digitalRead(buttonTogglePin);
    delay(10);

    if (buttonState == HIGH && !lightsOn) {
        lightsOn = true;

        while (buttonState == HIGH) {
            buttonState = digitalRead(buttonTogglePin);
            delay(10);
        }

        startLights();
    }

    if (buttonState == HIGH && lightsOn) {
        lightsOn = false;

        while (buttonState == HIGH) {
            buttonState = digitalRead(buttonTogglePin);
            delay(10);
        }

        stopLights();
    }
}

void startLights() {
    while (lightsOn) {
        digitalWrite(led_red, HIGH);
        delay(1000);
        if (!lightsOn) return;

        digitalWrite(led_yellow, HIGH);
        delay(2000);
        if (!lightsOn) return;

        digitalWrite(led_red, LOW);
        digitalWrite(led_yellow, LOW);
        digitalWrite(led_green, HIGH);
        delay(2000);
        if (!lightsOn) return;

        digitalWrite(led_green, LOW);
        digitalWrite(led_yellow, HIGH);
        delay(1000);
        if (!lightsOn) return;

        digitalWrite(led_yellow, LOW);
        digitalWrite(led_red, HIGH);
        delay(2000);
    }
}

void stopLights() {
    digitalWrite(led_green, LOW);
    digitalWrite(led_yellow, LOW);
    digitalWrite(led_red, LOW);
}