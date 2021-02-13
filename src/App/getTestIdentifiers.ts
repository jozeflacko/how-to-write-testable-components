export default function getTestIdentifiers(root: string) {
    return {
        root,
        description: root + '-description',
        buttonGoToReactJs: root + '-button-go-to-js',
    };
}