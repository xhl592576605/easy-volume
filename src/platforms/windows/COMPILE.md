```bash
https://zhuanlan.zhihu.com/p/388064452
g++ -o volume.exe main.cpp -lole32
g++ -o volume-new.exe main.cpp -lole32
g++ -o volume-new-64.exe main.cpp -lole32 -m64
g++ -o volume-new-32.exe main.cpp -lole32 -m32
g++ -o volume-new-64-Os.exe main.cpp -lole32 -m64 -Os
g++ -o volume-new-32-Os.exe main.cpp -lole32 -m32 -Os
g++ -o volume-new-Os.exe main.cpp -lole32 -m32 -Os
g++ -o volume-new-64-s.exe main.cpp -lole32 -m64 -s
g++ -o volume-new-32-s.exe main.cpp -lole32 -m32 -s
g++ -o volume-new-s.exe main.cpp -lole32  -s

```