// File: pages/masterPage.test.js
describe('updateCartCounter', () => {
    it('should log "Cart counter updated"', () => {
        // Mock console.log
        const consoleSpy = spyOn(console, 'log');

        // Call the function
        updateCartCounter();

        // Check if console.log was called with the correct message
        expect(consoleSpy).toHaveBeenCalledWith("Cart counter updated");
    });
});