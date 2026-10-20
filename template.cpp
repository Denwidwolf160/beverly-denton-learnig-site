#include <iostream>

template <typename T>
T larger(T first, T second) {
    return (first > second) ? first : second;
}

int main() {
    std::cout << larger(4, 9) << '\n';       // T is int
    std::cout << larger(2.5, 1.8) << '\n';   // T is double
}