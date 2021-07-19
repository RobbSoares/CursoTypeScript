/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.name = 'Rob';
    var NamespacePerson = /** @class */ (function () {
        function NamespacePerson(name) {
            this.name = name;
        }
        return NamespacePerson;
    }());
    MyNamespace.NamespacePerson = NamespacePerson;
    var pessoaDoNamespace = new NamespacePerson('Rob');
    var AnotherNamespace;
    (function (AnotherNamespace) {
        AnotherNamespace.nomeDoNamespace = 'Rob';
    })(AnotherNamespace = MyNamespace.AnotherNamespace || (MyNamespace.AnotherNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
var constDoNamespace = 'valor da const do namespace';
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modules.ts" />
console.log(MyNamespace.AnotherNamespace.nomeDoNamespace);
console.log(constDoNamespace);
