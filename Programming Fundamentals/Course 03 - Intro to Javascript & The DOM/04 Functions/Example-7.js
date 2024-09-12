// Where can you print out the value of variable c without resulting in an error?

const a = 1;
function x() {
    const b = 2;
    function y() {
        const c = 3;
        function z() {
            const d = 4;
        }
        z();
    }
    y();
}

x();

// anywhere inside function x() and y()