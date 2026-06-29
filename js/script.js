/**
 * 🏗️ DEV BUNKER - SCRIPT ENGINE
 * Carrega e renderiza arquivos Markdown no painel.
 */

async function loadTopic(filePath) {
    const contentArea = document.getElementById('content-area');
    
    // Feedback visual de carregamento
    contentArea.innerHTML = '<p class="loading">⏳ Carregando arquivo do bunker...</p>';

    try {
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} - Caminho inválido ou arquivo inexistente.`);
        }
        
        const markdownText = await response.text();
        
        // Converte Markdown para HTML usando a biblioteca marked.js
        const htmlContent = marked.parse(markdownText);
        
        // Injeta no DOM
        contentArea.innerHTML = htmlContent;
        
        // Otimização Mobile: Rola a tela suavemente para o conteúdo recém-carregado
        contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    } catch (error) {
        console.error('🚨 Falha no fetch:', error);
        contentArea.innerHTML = `<p class="error">❌ ERRO DE LEITURA: ${error.message}</p>`;
    }
}
