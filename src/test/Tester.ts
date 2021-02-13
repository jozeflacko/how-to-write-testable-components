export default interface Tester<TypeOfElement = any> {

    readonly element: TypeOfElement;

    assertExists(): void;

    assertNotExists(): void;

    assertHasText(text: string): void;
}