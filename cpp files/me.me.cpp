#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;
    double gpa;

    std::cout << "Enter your name: ";
    std::getline(std::cin, name);

    std::cout << "Enter your age: ";
    std::cin >> age;

    std::cout << "Enter your GPA: ";
    std::cin >> gpa;

    std::cout << "\nYour information:\n";
    std::cout << "Name: " << name << '\n';
    std::cout << "Age: " << age << '\n';
    std::cout << "GPA: " << gpa << '\n';

    return 0;
}