#include<iostream>
#include<string>
using namespace std;

int main() {
    string groups[] = {
        "Group 1 - The Innvators",
        "Group 2 - Code Master",
        "Groud 3 - Byte Force",
        "Group 4 - Tech Titans (My Group)",
    };
    int numGroups = sizeof(groups) / sizeof(groups[0]);
    cout << " === cavendish University - Class Groups ===" << endl;
     for(int i = 0; i < numGroups; i++) {
        cout << (i+1) <<". "<< groups[i] << endl;
     }
        cout << "\nTotal number of groups: " << numGroups << endl;
        cout << "My group is: "<<groups[4] << endl;

        return 0;

}