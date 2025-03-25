data segment
        string db 'Hello World!', 0DH, 0AH, '$'
data ends

code segment
        assume cs:code,ds:data,es:data

START:
        mov dx, data
        mov ds, dx

        mov ah, 9
        lea dx, string
        int 21h

        mov ah, 4ch
        xor al, al
        int 21h

code ends
        end START
