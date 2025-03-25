section .data
        string: db 'Hello World!', 10, 0

section .text
        global _start

_start:
        mov rax, 1  ; syscall write
        mov rdi, 1  ; stdout
        lea rsi, string
        mov rdx, 13
        syscall

        mov rax, 60
        xor rdi, rdi
        syscall
