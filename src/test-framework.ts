// tests go here; this will not be compiled when this package is used as an extension.
type TestRegistration = {
    name: string,
    impl: () => void,
}
type TestResult = {
    name: string,
    status: 'pass' | 'fail',
    error?: Error,
};

const registeredTests: TestRegistration[] = []
const testResults: TestResult[] = [];

export function it(name: string, impl: () => void) {
    registeredTests.push({name: 'it ' + name, impl});
}

export function runTests() {
    console.log(`Running ${registeredTests.length} tests...`);
    for (const test of registeredTests) {
        beforeEachHooks();
        try {
            test.impl();
            testResults.push({ name: test.name, status: 'pass' });
        } catch (e) {
            testResults.push({ name: test.name, status: 'fail', error: e });
        }
        afterEachHooks();
    }

    const failures = testResults.filter(r => r.status === 'fail');
    const totalCount = registeredTests.length;
    const failCount = failures.length;
    const passCount = totalCount - failCount;
    
    console.log(`${failCount}/${totalCount} failed, ${passCount}/${totalCount} passed`);

    for (const failure of failures) {
        console.error(`FAIL: ${failure.name}`);
        console.error(`    ${failure.error!.message}`);
    }

    if (failCount > 0) {
        throw new Error(`${failCount} test(s) failed`);
    }
}

export function assert(condition: boolean, message?: string) {
    if (!condition) {
        const messageSuffix = message ? `: ${message}` : '';
        throw new Error(`Assertion failed${messageSuffix}`);
    }
}

let executeLog: string[] = [];
let originalPlayerExecute: (command: string) => void;
function beforeEachHooks() {
    originalPlayerExecute = player.execute;
    executeLog = [];
    player.execute = function (command: string) {
        executeLog.push(command);
    }
}
function afterEachHooks() {
    player.execute = originalPlayerExecute;
}

export function assertExecuted(...expected: string[]) {
    const stringExecuteLog = JSON.stringify(executeLog);
    const stringExpected = JSON.stringify(expected);
    assert(stringExecuteLog === stringExpected, `expected player.execute calls like ${stringExpected}, but found ${stringExecuteLog}`);
}