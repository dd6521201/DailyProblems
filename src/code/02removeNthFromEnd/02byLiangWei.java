/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        /*主要用是一个找倒数第N个节点之前节点的思路，遍历一次链表，在遍历时尽量找到已遍
		历部分的倒数第N个节点的前节点，遍历结束后输出，这里也利用了说明中的n保证是有效的*/
        ListNode t = head;
		ListNode node = head;
		while(true) {
			if(node.next != null) {
				node = node.next;
				if(n < 1) {
					t = t.next;
				}
				n--;
			}else {
				break;
			}
		}    
		if(n == 1) {
			return head.next;
		}else {
			t.next = t.next.next;
		}
		return head;
    }
}
