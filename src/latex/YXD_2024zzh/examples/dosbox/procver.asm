data segment
        string db 'Hello World!', 0DH, 0AH, '$'
data ends

code segment
        assume cs:code,ds:data,es:data

main proc far
START:
        push ds
        xor ax, ax
        push ax
        
        mov dx, data
        mov ds, dx

        mov ah, 9
        lea dx, string
        int 21h

        retf
main endp

code ends
        end START
