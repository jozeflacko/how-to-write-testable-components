export enum AttributeName {
    id= 'id',
    className='className',
    href='href',
    value='value',
}

export default interface Test<TypeOfElement = any> {

    readonly element: TypeOfElement;

    assertExists(): void;

    assertNotExists(): void;

    assertHasText(text: string): void;

    click(): void;

    write(value: string | number): void;

    assertHasAttribute(attributeName: AttributeName, attributeValue: string): void;

    assertHasNotAttribute(attributeName: AttributeName, attributeValue: string): void;
}