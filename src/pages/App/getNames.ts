export default function getNames(root: string) {
    return {
        id: {
            root,
            description: root + '-description',
            buttonGoToReactJs: root + '-button-go-to-js',
        }
    };
}